#!/bin/bash

if [[ $EUID -ne 0 ]]; then
	echo "este usuario no tiene permisos"
	exit 1
fi

shutdown -h now

