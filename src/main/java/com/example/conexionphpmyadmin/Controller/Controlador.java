package com.example.conexionphpmyadmin.Controller;


import com.example.conexionphpmyadmin.DAO.AlumnoDAO;
import com.example.conexionphpmyadmin.DAO.UserDAO;
import com.example.conexionphpmyadmin.Model.Alumno;
import com.example.conexionphpmyadmin.Model.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controlador {

    @Autowired
    AlumnoDAO alumnoDao;
    @Autowired
    UserDAO userDAO;




    //Ruta relativa
    @GetMapping("/listar")
    public List<Alumno> listar() {
        return alumnoDao.listarAlumnos();
    }
    @GetMapping("/listar2")
    public List<User> listar2() {
        return userDAO.listarUsers();
    }
    @DeleteMapping("/eliminar/{id}")
    public void delete(@PathVariable int id) {
        alumnoDao.delete(id);
    }

    @PostMapping("/add/")
    public void add(@RequestBody Alumno alumno) {
        alumnoDao.add(alumno);
    }
    @PutMapping("/edit/{id}/{calificacion}")
    public void edit(@PathVariable int id, @PathVariable int calificacion) {
        alumnoDao.edit(id, calificacion);
    }
    @PutMapping("/edit2/{id}/{nombre}")
    public void edit(@PathVariable int id, @PathVariable String nombre) {
        alumnoDao.edit2(id, nombre);
    }
    @GetMapping("/buscar/{nombre}/{password}")
    public boolean buscar(@PathVariable String nombre,@PathVariable String password){
        return userDAO.find(nombre,password);
    }

    @GetMapping("/register/{nombre}/{password}")
    public boolean register(@PathVariable String nombre,@PathVariable String password){
        return userDAO.findRegister(nombre,password);
    }

    @PostMapping("/addUser/")
    public void add(@RequestBody User user) {



        userDAO.add(user);
    }


    @GetMapping("/findType/{nombre}")
    public boolean findType(@PathVariable String nombre) {
        return userDAO.findTipo(nombre);
    }

}
