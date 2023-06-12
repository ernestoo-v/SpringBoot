package com.example.conexionphpmyadmin.DAO;

import com.example.conexionphpmyadmin.Model.Alumno;

import java.util.List;

public interface AlumnoDAO {

    List<Alumno> listarAlumnos();
    void delete(int id);
    void add(Alumno alumno);
    void edit(int id, int calificacion);

    void edit2(int id, String nombre);

}
