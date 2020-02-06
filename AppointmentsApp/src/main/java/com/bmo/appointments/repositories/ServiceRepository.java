package com.bmo.appointments.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bmo.appointments.beans.*;

public interface ServiceRepository extends JpaRepository<Service, Long>{

	Page<Service> findByClientId(Long clientId, Pageable pageable);
}
