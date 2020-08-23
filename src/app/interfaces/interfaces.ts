export interface Dispositivo {
    id?: number;
    mac?: string;
    tipo?: string;
    conected?: boolean;
    conexionActual?: Conexion;
    ip?: string;
}

export interface Conexion {
    id?: number;
    nombre?: string;
    tipo?: number;
    tipoCifrado?: string;
    usuario?: string;
    clave?: string;
}
export interface Historico {
    id?: number;
    tipoConRed?: number;
    nombreConRed?: string;
    tipoCifradoConRed?: string;
    usuarioConRed?: string;
    claveConRed?: string;
    ipDispositivo?: string;
    macDispositivo?: string;
    tipoDispositivo?: string;
}