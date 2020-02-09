package com.bmo.appointments.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.bmo.appointments.beans.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	
	
	Page<Appointment> findByCode(@Param("code")String code, Pageable pageable);
	Page<Appointment> findByPersonId(@Param("personId") Long personId, Pageable pageable);
}
