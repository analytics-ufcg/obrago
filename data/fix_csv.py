# coding: utf-8
# lê o arquivo vindo da câmara municipal e transforma em um json.

import os
import json
import sys

def fix(valor):
    primeira = valor.index(',')
    if primeira+1 <= len(valor):
            segunda = valor[primeira+1:].index(',')
    return valor[:primeira+segunda+1]

if len(sys.argv) != 3:
    print 'usage: python fix_csv.py camara-municipal-cg.csv beatifulcsv.csv'
    sys.exit(0)

in_f = open(sys.argv[1], 'r')
out = open(sys.argv[2], 'w')

keys = ["regCge", "numero", "orgao", "convenente"
        ,"celebracao","publicacao","objeto","vigencia","contrapartida","valorTotal"]

data = []

for i in in_f:
    tokens = i.split(";")
    if len(tokens) == 10:
        s = ''.join(fix(tokens[-1]))
        out.write(';'.join(tokens[:-2])+";"+s+"\n")
        #try:
        #    da_vez = {}
        #    for j in range(9):
        #        da_vez[keys[j]] = tokens[j].encode('utf-8')
        #    data.append(da_vez)
        #except Exception, e :
        #    continue
in_f.close()
out.close()
#log = open("municipal-cg.json", "w+")
#json.dump(data, log)
