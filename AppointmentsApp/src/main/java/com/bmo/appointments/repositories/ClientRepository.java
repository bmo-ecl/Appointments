package com.bmo.appointments.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bmo.appointments.beans.*;


public interface ClientRepository extends JpaRepository<Client, Long>{

}
