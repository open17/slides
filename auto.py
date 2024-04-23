import os

current_directory = os.getcwd()
src_directory = os.path.join(current_directory, 'src')
items = os.listdir(src_directory)
folder=[item for item in items if os.path.isdir(os.path.join(src_directory, item))]  

md_links="\n"  

print("文件夹:", folder)  


for f in folder:
    os.system(f"cd {current_directory} & npx slidev build ./src/{f}/slides.md --base /slides/{f}/ --out ../../dist/{f}/ ")
    md_links+=f"- [{f}]('https://open17.github.io/slides/{f}')  \n"



with open('README.md', 'r',encoding='utf-8') as file:
    ppt_content = file.read()
start_index = ppt_content.find('<!-- start -->')
end_index = ppt_content.find('<!-- end -->')
if start_index != -1 and end_index != -1:
    new_content = ppt_content[:start_index+len('<!-- start -->')+1] + f'\n{md_links}\n' + ppt_content[end_index:]
    with open('README.md', 'w',encoding='utf-8') as file:
        file.write(new_content)
else:
    print("标记未找到")  

os.system("npx marked -i README.md -o ./dist/index.html" )