package com.bmo.appointments.repositories;


import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bmo.appointments.beans.*;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long>{

	@Query("SELECT s FROM Service s " +
			"Where s.id =  :id and s.estado = 2 ")
	Optional<Service> findById(Long id);
	
	Page<Service> findByClientId(Long clientId, Pageable pageable);
	
	@Query("SELECT s FROM Service s " +
			"Where s.client.id =  :clientId and s.standard <> 1 and s.estado = 2 ")
	Page<Service> findByClientIdNotDefault(@Param("clientId") Long clientId, Pageable pageable);
	
	
	@Query("SELECT s FROM Service s " +
			"Where s.client.id =  :clientId and s.standard = 1 and s.estado = 2 ")
	Page<Service> findByClientIdDefault(@Param("clientId")Long clientId, Pageable pageable);
	
}

