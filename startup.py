import os
import subprocess

directory = "harbinger-frontend"
command = "ng serve --open"  # Replace with your desired command

# Ensure the directory exists
if not os.path.exists(directory):
    print(f"Error: Directory '{directory}' does not exist.")
else:
    try:
        # Store the current directory
        current_directory = os.getcwd()
        
        # Change to the desired directory
        os.chdir(directory)
        
        # Execute the command
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        
        # Change back to the original directory
        os.chdir(current_directory)

        if result.returncode == 0:
            print("Command executed successfully:")
            print(result.stdout)
        else:
            print(f"Error executing command: {result.stderr}")
    except Exception as e:
        print(f"An error occurred: {e}")


 