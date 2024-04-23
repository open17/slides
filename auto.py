import os

current_directory = os.getcwd()
src_directory = os.path.join(current_directory, 'src')
items = os.listdir(src_directory)
folder=[item for item in items if os.path.isdir(os.path.join(src_directory, item))]
print("文件夹:", folder)
for f in folder:
    os.system(f"cd {current_directory} & yarn slidev build ./src/{f}/slides.md --base /slides/{f}/ --out ../../dist/{f}/ ")