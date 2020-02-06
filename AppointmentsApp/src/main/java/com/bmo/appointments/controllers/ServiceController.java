package com.bmo.appointments.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmo.appointments.beans.Service;
import com.bmo.appointments.repositories.ServiceRepository;

@RestController
@RequestMapping("/api")
public class ServiceController {
	
	@Autowired
	ServiceRepository serviceRep;
	
	
	//Get Services by ClientId
	@GetMapping("/clients/{clientId}/services")
	public Page<Service> getServicesByClientId(@PathVariable(value ="client_id") Long clientId, Pageable pageable){
		return serviceRep.findByClientId(clientId, pageable);
	}

}
