const app1 = {
    data() {
        return {
            mensajes: [
                { accion: 'Estudiar para examen', estado: 'false' },
                { accion: 'Tarea de programación', estado: 'false' },
                { accion: 'Lavar uniforme', estado: 'false' },
                { accion: 'Leer 15 min', estado: 'false' },
                { accion: 'Ordenar habitación', estado: 'false' }
            ],
            cantidad: 1
        };
    },
    computed: {
        rangeColorClass() {
            if (this.cantidad <= 4) return 'range-green';
            if (this.cantidad <= 7) return 'range-orange';
            return 'range-red';
        }
        
    },
    methods: {
        incrementar() {
            if (this.cantidad < 10) {
                this.cantidad++;
            }
        },
        disminuir() {
            if (this.cantidad > 1) {
                this.cantidad--;
            }
        },
        toggleEstado(index) {
            this.mensajes[index].estado = this.mensajes[index].estado === 'true' ? 'false' : 'true';
        }, 
        cuantosMensajes() {
            return this.mensajes.filter(mensaje => mensaje.estado === 'true').length;
        }
    }
};

Vue.createApp(app1).mount('#app');
