package com.example.conexionphpmyadmin.DAO;

import com.example.conexionphpmyadmin.Model.Alumno;
import com.example.conexionphpmyadmin.Model.User;

import java.util.List;

public interface UserDAO {

    //    List<Alumno> listarAlumnos();
//    void delete(int id);
//    void add(Alumno fruta);
    List<User> listarUsers();

    boolean find(String nombre,String password);

    boolean findRegister(String nombre,String password);

    boolean findTipo(String nombre);

    void add(User user);



}
