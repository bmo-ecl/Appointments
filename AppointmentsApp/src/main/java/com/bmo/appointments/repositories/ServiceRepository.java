package com.bmo.appointments.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bmo.appointments.beans.*;

public interface ServiceRepository extends JpaRepository<Service, Long>{

	Page<Service> findByClientId(Long clientId, Pageable pageable);
	
	@Query("SELECT s FROM Service s " +
			"Where s.client.id =  :clientId and s.standard <> 1 ")
	Page<Service> findByClientIdNotDefault(@Param("clientId") Long clientId, Pageable pageable);
	
	
	@Query("SELECT s FROM Service s " +
			"Where s.client.id =  :clientId and s.standard = 1 ")
	Page<Service> findByClientIdDefault(@Param("clientId")Long clientId, Pageable pageable);
	
}

