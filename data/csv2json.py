# coding: utf-8
# lê o arquivo vindo da câmara municipal e transforma em um json.

import os
import json
import sys

if len(sys.argv) != 3:
    print 'usage: python csv2json.py beatifulcsv.csv out.json'
    sys.exit(0)

in_f = open(sys.argv[1], 'r')

keys = ["regCge", "numero", "orgao", "convenente"
        ,"celebracao","publicacao","objeto","vigencia","contrapartida","valorTotal"]

data = []

for i in in_f:
    tokens = i.split(";")
    if len(tokens) == 9:
        try:
            da_vez = {}
            for j in range(9):
                da_vez[keys[j]] = tokens[j].encode('utf-8')
            data.append(da_vez)
        except Exception, e :
            continue
log = open(sys.argv[2], "w+")
json.dump(data, log)
in_f.close()
