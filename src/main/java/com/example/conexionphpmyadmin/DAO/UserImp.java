package com.example.conexionphpmyadmin.DAO;

import com.example.conexionphpmyadmin.Model.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class UserImp implements UserDAO {
    @PersistenceContext
    EntityManager entityManager;
    Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
    @Override
    public boolean find(String nombre,String password) {
        boolean bool = false;


        for(int i=0;i<listarUsers().size();i++){

            if(listarUsers().get(i).getNombre().equals(nombre)){

                if(argon2.verify(listarUsers().get(i).getPassword(),password)){
                    bool = true;
                }
            }
        }
        return bool;
    }

    @Override
    public boolean findRegister(String nombre, String password) {
        boolean bool = false;
        for(int i=0;i<listarUsers().size();i++){
            if(listarUsers().get(i).getNombre().equals(nombre)){
                    bool = true;
            }
        }
        return bool;
    }

    @Override
    public void add(User user) {
        Argon2 argon23 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon23.hash(1,1024,1,user.getPassword());
        user.setPassword(hash);
        entityManager.merge(user);
    }

    @Override
    public boolean findTipo(String nombre) {
        boolean bool = false;
        for(int i=0;i<listarUsers().size();i++){
            if(listarUsers().get(i).getNombre().equals(nombre)){
                if(listarUsers().get(i).getTipo()==2){
                    bool = true;
                }
            }
        }
        return bool;
    }
    @Override
    public List<User> listarUsers() {

        String sql="FROM User";
        return entityManager.createQuery(sql).getResultList();
    }
}
