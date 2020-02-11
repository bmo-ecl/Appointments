package com.bmo.appointments.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bmo.appointments.beans.Person;
import com.bmo.appointments.beans.Service;
import com.bmo.appointments.repositories.PersonRepository;
import com.bmo.appointments.repositories.ServiceRepository;

@RestController
@RequestMapping("/serviceappts")
public class PersonController {

	@Autowired
	PersonRepository personRep;
	@Autowired
	ServiceRepository serviceRep;
	
	@GetMapping("/services/{serviceId}/persons")
	public Person findByServiceIdAndDni(@PathVariable(value="serviceId") Long serviceId, @PathVariable(value="dni") String dni) {
		return personRep.findByServiceIdAndDni(serviceId, dni);
	}
	
	@GetMapping("/persons/{id}")
	public Optional<Person> findById(@PathVariable(value="id") Long id) {
		return personRep.findById(id);
	}
	
	
	@GetMapping("/persons")
	@ResponseBody
	public Optional<Person> getPersonsByServiceId(@RequestParam(name="serviceId") Long serviceId, @RequestParam(name="dni") String dni){
		return personRep.findByServiceDni(serviceId, dni);
	}
	
	@PostMapping("/services/{serviceId}/persons")
	public Optional<Person> createPerson( @PathVariable(value="serviceId") Long serviceId, @Valid @RequestBody Person person) throws DataIntegrityViolationException {
		Optional<Person> result = null;
		try {
			result = serviceRep.findById(serviceId).map(service ->{
				person.setService(service);
				return personRep.save(person);
				});

			
		}catch(DataIntegrityViolationException e) {
			result = personRep.findByServiceDni(serviceId, person.getDni());
		}
		
	
		return result;
	}
	
	
}
