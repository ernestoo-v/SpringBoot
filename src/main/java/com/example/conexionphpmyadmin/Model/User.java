package com.example.conexionphpmyadmin.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name="users")
@EqualsAndHashCode
@Entity

public class User {
    @Id
    @Column(name="id")
    private int id;
    @Column(name = "nombre")
    private String nombre;

    @Column(name = "password")
    private String password;

    @Column(name = "tipo")
    private int tipo;
}
