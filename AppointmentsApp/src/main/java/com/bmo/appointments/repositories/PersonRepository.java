package com.bmo.appointments.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bmo.appointments.beans.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

	@Query("SELECT p FROM Person p " +
			"Where p.service.id =  :serviceId and p.dni = :dni and p.estado = 2 ")
	Optional<Person> findByServiceDni(@Param("serviceId")Long serviceId, @Param("dni")String dni);
	
	Person findByServiceIdAndDni(Long serviceId, String dni);
	
	
}	
