import os

def restore_prefix():
    base_path = "."
    for folder_name in os.listdir(base_path):
        if not folder_name.startswith("epc_") and os.path.isdir(folder_name):
            old_dir = os.path.join(base_path, folder_name)
            new_folder_name = "epc_" + folder_name
            new_dir = os.path.join(base_path, new_folder_name)
            
            os.rename(old_dir, new_dir)
            print(f"Restored folder: {folder_name} -> {new_folder_name}")

            for file_name in os.listdir(new_dir):
                if not file_name.startswith("epc_"):
                    old_file = os.path.join(new_dir, file_name)
                    new_file_name = "epc_" + file_name
                    new_file = os.path.join(new_dir, new_file_name)
                    os.rename(old_file, new_file)

    print("Restoration completed!")

if __name__ == "__main__":
    restore_prefix()
