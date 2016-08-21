#install.packages("readr")
require(readr)
federal <- read_csv(file = "../data/convenios_federais.csv")
interessantes_cg <- federal[grepl("construção|reforma|construir|rua|atletismo",federal$OBJETO_PROPOSTA, ignore.case = T) & federal$MUNIC_PROPONENTE=="CAMPINA GRANDE",]
interessantes_cg <- interessantes_cg[,c("SIT_CONVENIO","NR_CONVENIO","DIA_INIC_VIGENC_CONV","DIA_FIM_VIGENC_CONV","DIA_LIMITE_PREST_CONTAS","ID_PROPOSTA","VL_GLOBAL_CONV","VL_REPASSE_CONV","VL_CONTRAPARTIDA_CONV","VL_EMPENHADO_CONV","VL_DESEMBOLSADO_CONV","VL_SALDO_REMAN_TESOURO","VL_INGRESSO_CONTRAPARTIDA","UF_PROPONENTE","MUNIC_PROPONENTE","OBJETO_PROPOSTA","funcao.imputada","TX_STATUS")]
interessantes_cg <- interessantes_cg[interessantes_cg$TX_STATUS != "Anulado",]


#write.table(interessantes_cg,file = "../data/interessantes_cg_fed.csv", sep = "|", row.names = F)
#escolas <- federal[grepl("escola",federal$OBJETO_PROPOSTA, ignore.case = T),]


licitacao <- read_csv(file="../data/licitacao.csv")
empenhos <- read_csv(file="../data/empenhos_2015.csv")
cod_ugestora <- read_csv(file="../data/codigo_ugestora.csv")
#liquidacoes <- read_csv(file="../data/liquidacao.csv")


cod_gestoras_cg <- cod_ugestora[cod_ugestora$cd_Municipio == "50",]
vt_gestoras_cg <- unique(cod_gestoras_cg$cd_Ugestora)
vt_gestoras_cg <- vt_gestoras_cg[!is.na(vt_gestoras_cg)]
#213032015 - MENINAO

licitacoes_cg_2010 <- licitacao[licitacao$cd_UGestora %in% vt_gestoras_cg,]
licitacoes_cg_2010 <- licitacoes_cg_2013[licitacoes_cg_2013$dt_Ano > 2009, ]
licitacoes_cg_2010 <- licitacoes_cg_2013[!is.na(licitacoes_cg_2013$cd_UGestora), ]

empenhos_cg_2013 <- empenhos[empenhos$cd_UGestora %in% vt_gestoras_cg,]
empenhos_cg_2013 <- empenhos_cg_2013[empenhos_cg_2013$dt_Ano > 2012,]
valor_absurdo <- empenhos_cg_2013[empenhos_cg_2013$nu_Licitacao == "000092012",]


000092012


mrg <- merge(licitacoes_cg_2013,empenhos_cg_2013,by.x = "nu_Licitacao", by.y = "nu_Licitacao")
head(licitacoes_cg_2013)

#liquidacoes_cg_2013 <- liquidacoes[liquidacoes$cd_UGestora %in% vt_gestoras_cg,]
#liquidacoes_cg_2013 <- liquidacoes_cg_2013[liquidacoes_cg_2013$dt_Ano > 2012,]


construcoes_cg_2010 <- licitacoes_cg_2010[grepl("constru|reforma|pavimenta|cobertura|telhado", licitacoes_cg_2010$de_Obs,ignore.case = T),]


federal_cg <- interessantes_cg
estadual_cg <- construcoes_cg_2010

write_csv(federal_cg,"../../clone_10/obrago/data/federal-cg-raw.csv")
write_csv(estadual_cg,"../../clone_10/obrago/data/estadual-cg-raw.csv")

federal_cg["TIPO"] <- "Convenio"
saida_federal_cg <- federal_cg[,c("NR_CONVENIO","DIA_INIC_VIGENC_CONV", "DIA_FIM_VIGENC_CONV", "VL_GLOBAL_CONV", "VL_EMPENHADO_CONV", "OBJETO_PROPOSTA","TX_STATUS","UF_PROPONENTE","MUNIC_PROPONENTE","funcao.imputada","TIPO")]
colnames(saida_federal_cg) <- c("ID","DATA_INICIO","DATA_FIM","VALOR_TOTAL","VALOR_EMPENHADO","DESCRICAO","STATUS","UF","MUNICIPIO","AREA","TIPO")

estadual_cg["TIPO"] <- "Licitacao"
estadual_cg["DATA_FIM"] <- NA
estadual_cg["VALOR_EMPENHADO"] <- NA
estadual_cg["STATUS"] <- NA
estadual_cg["UF"] <- "PB"
estadual_cg["MUNICIPIO"] <- "CAMPINA GRANDE"
estadual_cg["AREA"] <- NA

saida_estadual_cg <- estadual_cg[,c("nu_Licitacao","dt_Homologacao","DATA_FIM","vl_Licitacao","VALOR_EMPENHADO","de_Obs","STATUS","UF","MUNICIPIO","AREA","TIPO")]
colnames(saida_estadual_cg) <- c("ID","DATA_INICIO","DATA_FIM","VALOR_TOTAL","VALOR_EMPENHADO","DESCRICAO","STATUS","UF","MUNICIPIO","AREA","TIPO")


municipal_cg <- read_csv2(file = "../../clone_10/obrago/data/dados_producao/municipal-cg.csv")

municipal_cg["VALOR_EMPENHADO"] <- NA
municipal_cg["STATUS"] <- NA
municipal_cg["UF"] <- "PB"
municipal_cg["MUNICIPIO"] <- "CAMPINA GRANDE"
municipal_cg["AREA"] <- NA
municipal_cg["TIPO"] <- "Convenio"

saida_municipal_cg <- municipal_cg[,c("REG.CGE","PUBLICAÇÃO","VIGÊNCIA","VALOR TOTAL","VALOR_EMPENHADO","OBJETO","STATUS","UF","MUNICIPIO","AREA","TIPO")]
colnames(saida_municipal_cg) <- c("ID","DATA_INICIO","DATA_FIM","VALOR_TOTAL","VALOR_EMPENHADO","DESCRICAO","STATUS","UF","MUNICIPIO","AREA","TIPO")


saida_final_ultima_juro <- rbind(saida_municipal_cg,saida_federal_cg,saida_estadual_cg)
saida_final_ultima_juro$VALOR_TOTAL <- as.character(saida_final_ultima_juro$VALOR_TOTAL)
saida_final_ultima_juro$VALOR_EMPENHADO <- as.character(saida_final_ultima_juro$VALOR_EMPENHADO)


write_csv(saida_final_ultima_juro,"saida_final_ultima_juro.csv")

mrg_construcoes_cg_2013 <- merge(construcoes_cg_2013,empenhos_cg_2013,by.x = "nu_Licitacao", by.y = "nu_Licitacao", )

colnames(construcoes_cg_2013)
pavim <- gestora_cg_2013[grepl("pavimenta", gestora_cg_2013$de_Obs,ignore.case = T),]
web <- gestora_cg_2013[grepl("isaac", gestora_cg_2013$de_Obs,ignore.case = T),]
head(liquidacoes_cg_2013)

pg <- liquidacoes_cg_2013[liquidacoes_cg_2013$nu_Liquidacao == "214052014",]
#028012015
teste <- construcoes_cg_2013[order(construcoes_cg_2013$dt_Ano),c("de_Obs","dt_Ano")]

write_csv(teste,"teste.csv")

meninao <- licitacao[grepl("meninão", licitacao$de_Obs,ignore.case = T),]
sample <- empenhos[empenhos$cd_UGestora == "201050",]

mrg <- merge(sample, gestora_cg, by.x="nu_Licitacao",by.y="nu_Licitacao")

table(sample$nu_Licitacao)
unique(mrg$de_Obs)
head(campina$de_Obs,n = 20)
#206012013 - CONSTRUÇÃO DE QUADRA ESCOLAR COBERTA COM VESTIÁRIO NA EMEF ANTONIO MARIZ.