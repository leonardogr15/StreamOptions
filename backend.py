from flask import Flask, request, jsonify,render_template
import socket
from waitress import serve

app = Flask(__name__)

@app.route('/')
def index():
    if check_internet_connection():
        print("Hay conexión a Internet.")
        return render_template('index.html')
    else:
        print("No hay conexión a Internet.")
        return render_template('404.html')
        
    

@app.route('/ruta-de-tu-funcion-python')
def funcion_python():
    import subprocess
    ruta = '/home/casa/compartida/ejecutar_off.sh'

    subprocess.run(['sh',ruta])

    # Comando para apagar el sistema
    comando = "sudo shutdown -h now"

    # Ejecutar el comando
    # subprocess.run(comando, shell=True)
    # Lógica de tu función Python aquí
    mensaje = "¡Hola desde Flask!"
    return mensaje

def check_internet_connection():
    try:
        # Intenta establecer una conexión con un servidor remoto
        socket.create_connection(("www.google.com", 80))
        return True
    except OSError:
        pass
    return False



if __name__ == '__main__':
	serve(app,host='0.0.0.0',port=8000)
    #app.run(host='0.0.0.0',debug=True, port=1221)
