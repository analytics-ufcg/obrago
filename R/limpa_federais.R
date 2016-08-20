#install.packages("readr")
require(readr)
federal <- read_csv(file = "../data/convenios_federais.csv")
interessantes_cg <- federal[grepl("construção|reforma|construir|rua",federal$OBJETO_PROPOSTA, ignore.case = T) & federal$MUNIC_PROPONENTE=="CAMPINA GRANDE",]
interessantes_cg <- interessantes_cg[,c("SIT_CONVENIO","NR_CONVENIO","DIA_INIC_VIGENC_CONV","DIA_FIM_VIGENC_CONV","DIA_LIMITE_PREST_CONTAS","ID_PROPOSTA","VL_GLOBAL_CONV","VL_REPASSE_CONV","VL_CONTRAPARTIDA_CONV","VL_EMPENHADO_CONV","VL_DESEMBOLSADO_CONV","VL_SALDO_REMAN_TESOURO","VL_INGRESSO_CONTRAPARTIDA","UF_PROPONENTE","MUNIC_PROPONENTE","OBJETO_PROPOSTA","funcao.imputada","TX_STATUS")]
write.table(interessantes_cg,file = "../data/interessantes_cg_fed.csv", sep = "|", row.names = F)
