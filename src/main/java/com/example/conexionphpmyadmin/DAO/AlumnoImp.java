package com.example.conexionphpmyadmin.DAO;

import com.example.conexionphpmyadmin.Model.Alumno;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class AlumnoImp implements AlumnoDAO {
    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Alumno> listarAlumnos() {

        String sql="From Alumno";


        return entityManager.createQuery(sql).getResultList();
    }
    @Override
    public void delete(int id) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        entityManager.remove(alumno);
    }
    @Override
    public void add(Alumno alumno) {
//        entityManager.persist(alumno);
        entityManager.merge(alumno);
    }
    @Override
    public void edit(int id, int calificacion) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        alumno.setId(id);
        alumno.setCalificacion(calificacion);
        add(alumno);
        entityManager.merge(alumno);
    }

    @Override
    public void edit2(int id, String nombre) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        alumno.setId(id);
        alumno.setNombre(nombre);
        add(alumno);
        entityManager.merge(alumno);
    }

}

