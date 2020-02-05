package com.bmo.appointments.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmo.appointments.beans.Client;
import com.bmo.appointments.repositories.ClientRepository;

@RestController
@RequestMapping("/api")
public class ClientController {
	
	@Autowired
	ClientRepository clientRep;
	
	//Get All Clients
	@GetMapping("/clients")
	public List<Client> getAllClients(){
		List<Client> l = clientRep.findAll();
		System.out.println("list amount: " + l.size());
		return clientRep.findAll();
	}
	
	
}
