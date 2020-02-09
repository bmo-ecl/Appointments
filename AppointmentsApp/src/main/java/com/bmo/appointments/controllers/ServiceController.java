package com.bmo.appointments.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmo.appointments.beans.Client;
import com.bmo.appointments.beans.Service;
import com.bmo.appointments.repositories.ServiceRepository;


@RestController
@RequestMapping("/api")
public class ServiceController {
	
	@Autowired
	ServiceRepository serviceRep;
	
	@GetMapping("/services/{serviceId}")
	Optional<Service>findByServiceId(@PathVariable Long serviceId) {
		System.out.println("inside servicecontroller");
		return serviceRep.findById(serviceId);
	}
	
	//Get Services by ClientId No Default
	@GetMapping("/clients/{clientId}/services")
	public Page<Service> getServicesByClientId(@PathVariable(value ="clientId") Long clientId, Pageable pageable){
		
		
		Page<Service> services = null;
		Page<Service> servicesNotDefault = serviceRep.findByClientIdNotDefault(clientId, pageable);
		if(servicesNotDefault.isEmpty()) {
			Page<Service> servicesDefault = serviceRep.findByClientIdDefault(clientId, pageable);
			services = servicesDefault;
		}else {
			services = servicesNotDefault;
		}
		
		return services;
	}
	


}
