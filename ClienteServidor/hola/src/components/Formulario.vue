<template>

<div class="container" style="margin-top: 1em;">
    <!-- Sign up form -->
    <form>
        <!-- Sign up card -->
        <div class="card person-card">
            <div class="card-body">
                <!-- Sex image -->
                <img id="img_sex" class="person-img"
                    src="https://image.flaticon.com/icons/svg/376/376075.svg">
                <h2 id="who_message" class="card-title">BACKUP </h2>



                <!-- First row (on medium screen) -->
                <div class="row">
                    
                    
                    <div class="form-group col-md-5">
                        <input id="userBd" type="text" class="form-control" placeholder="Usuario" v-model="backup.userBd">
                        
                    </div>
                    <div class="form-group col-md-5">
                        <input id="passwordBd" type="password" class="form-control" placeholder="Contraseña" v-model="backup.passwordBd">
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6" style="padding=0.5em;">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Descripcion de la BD</h2>
                        <div class="form-group">
                             
                            <textarea id="descripcionBd" name="comentarios" rows="15" cols="63" v-model="backup.descripcionBd">Escribe aquí la descripcion de la BD</textarea>
                           
                        </div>
                        <div class="form-group">
                            
                           
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="col-md-6">
                <div class="card"> 
                    <div class="card-body">
                        <h2 class="card-title"> Nombre, fecha y Hora</h2>
                        <div class="form-group">
                            <label class="col-form-label">FECHA</label>
                            <input type="date" class="form-control" id="dateb" required v-model="backup.dateb"> 
                            
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">HORA</label>
                            <input type="time" class="form-control" id="timeBd"  required v-model="backup.timeBd">
                           
                        </div>
                        <div class="form-group">
                            <label  class="col-form-label">NOMBRE DE LA BD</label>
                            <input type="text" class="form-control" id="nameBd" placeholder="Ingresa el nombre" required v-model="backup.nameBd">
                           
                        </div>
                        <div class="form-group">
                        <label class="col-form-label"> Pon nombre IP </label>
                        <input id="ip" type="text" class="form-control" placeholder="Ip" v-model="backup.ip">   
                    </div>
                    <div class="form-group">
                            <label class="col-form label"> Puerto </label>

                        <input id="port" type="text" class="form-control" placeholder="Puerto" v-model="backup.port">
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top: 1em;">
            <button type="button" class="btn btn-primary btn-lg btn-block" @click="registrar">CREAR </button>
        </div>
        </form>
</div>
</template>

<style>
body {
    background-color: #4480db;
}

.card {
    margin-top: 1em;
}

/* IMG displaying */
.person-card {
    margin-top: 5em;
    padding-top: 5em;
}
.person-card .card-title{
    text-align: center;
}
.person-card .person-img{
    width: 10em;
    position: absolute;
    top: -5em;
    left: 50%;
    margin-left: -5em;
    border-radius: 50%;
    overflow: hidden;
    
}

</style>
<script>
import {API} from '../Servicios/axios';
export default {
data(){
    return {
        backup: {
          name: '',
          nameBd: '',
          userBd: '',
          passwordBd: '',
          port: '',
          ip: '',
          descripcionBd:'',
          dateb: '',
          timeBd: '',
          status: '0'
        }
    }
},
methods: {
    registrar(){
        API.post("http://localhost:3333/api/v1/settings-crear",{
        name:this.backup.nameBd+this.backup.dateb,
        nameBd:this.backup.nameBd+".sql",
        userBd:this.backup.userBd,
        passwordBd:this.backup.passwordBd,
        port:this.backup.port,
        ip:this.backup.ip,
        descripcionBd:this.backup.descripcionBd,
        dateb:this.backup.dateb,
        timeBd:this.backup.timeBd,
        status:this.backup.status
        }).then(response => {
            // eslint-disable-next-line no-console
            console.log(response)
          })
          this.$router.push("/backups")
    }
}
}
</script>