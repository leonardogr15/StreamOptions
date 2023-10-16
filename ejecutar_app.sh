#!/bin/bash

# Cambia al directorio /home/casa/compartida
cd /home/casa/compartida

# Ejecuta el comando python3 backend.py en segundo plano
python3 backend.py &

# Espera un segundo para asegurarse de que el backend esté en funcionamiento
sleep 1

# Abre el navegador Firefox y presiona la tecla F11 para maximizarlo
firefox &
sleep 3
#DISPLAY=:0 /usr/bin/xdotool search --onlyvisible --class "Firefox" key F11

