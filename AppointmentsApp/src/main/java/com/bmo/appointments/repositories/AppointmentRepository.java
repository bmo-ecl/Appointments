package com.bmo.appointments.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bmo.appointments.beans.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	
	
	Page<Appointment> findByCode(@Param("code")String code, Pageable pageable);
	Page<Appointment> findByPersonId(@Param("personId") Long personId, @Param("estado") Short estado,  Pageable pageable);
	
	
	@Query("SELECT a, p FROM Appointment a " +
			"Inner join Person p on p.id = a.person.id " +
			"Where a.service.id =  :serviceId and a.person.id = :personId and a.date = :date and a.estado = :estado ")
	Page<Appointment> findByServiceIdAndPersonIdAndDate(@Param("serviceId") Long serviceId, @Param("personId") Long personId, @Param("date") LocalDate date, @Param("estado") Short estado, Pageable pageable);
	
	

	@Query("SELECT a, p FROM Appointment a " +
			"Inner join Person p on p.id = a.person.id " +
			"Where a.service.id =  :serviceId and a.person.id = :personId and a.estado = :estado and a.date > :today")
	Page<Appointment> findByServiceIdAndPersonId(@Param("serviceId") Long serviceId, @Param("personId") Long personId, 
			@Param("today") LocalDate today, @Param("estado") Short estado, Pageable pageable);
	
	
	
	@Query("SELECT a, p FROM Appointment a " +
			"Inner join Person p on p.id = a.person.id " +
			"Where a.service.id =  :serviceId and a.date = :date and a.estado = :estado ")
	Page<Appointment> findByServiceIdAndDate(@Param("serviceId") Long serviceId, @Param("date") LocalDate date, @Param("estado") Short estado, Pageable pageable);
	
}
