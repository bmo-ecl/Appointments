package com.bmo.appointments.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmo.appointments.repositories.ServiceRepository;

@RestController
@RequestMapping("/api")
public class ServiceController {
	
	@Autowired
	ServiceRepository serviceRep;
	
	
	//Get all Services

}
