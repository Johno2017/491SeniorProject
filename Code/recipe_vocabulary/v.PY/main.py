import os, re, string

file_name = "Data/vocab_list_py.txt"
file = open(file_name, "r+")
data = file.readlines()

'''
This block of code takes an existing data file and converting
everything to a dictionary
'''
strip_data = []
data_dic = {}
for i in data:
    strip_data.append(i.strip())
for i in range (len(strip_data)):
    temp = strip_data[i]
    temp = temp.split(" ")
    data_dic[temp[0]] = int(temp[1])
del strip_data

'''
This takes in user inputs. It takes into account of
multiple paragrapgs which is unable to be done with input()
'''
print("Enter paragraph(s). Press 'Enter' -> 'Ctrl+D' to finish:")
contents = []
final_data = []
while True:
    try:
        line = input()
    except EOFError:
        break
    contents.append(line) 
for cstring in contents:
    final_data.append(cstring.translate(str.maketrans('', '', string.punctuation)).lower())
del contents

'''
Input the user input into the current dictionary
'''
temp = []
for sentence in final_data:
    temp = sentence.split(" ")
    for word in temp:
        if word in data_dic: # in dictionary
            data_dic[word] += 1
        else: # not in dictionary
            data_dic[word] = 1
del temp

'''
Convert dictionary into text file
'''
for data in data_dic:
    temp = data + " " + str(data_dic[data])
    print(temp)
    file.write(temp)






























