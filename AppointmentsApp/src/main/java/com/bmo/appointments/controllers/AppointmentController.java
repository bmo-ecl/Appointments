package com.bmo.appointments.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bmo.appointments.beans.Appointment;
import com.bmo.appointments.beans.Person;
import com.bmo.appointments.beans.Service;
import com.bmo.appointments.repositories.AppointmentRepository;
import com.bmo.appointments.repositories.PersonRepository;
import com.bmo.appointments.repositories.ServiceRepository;

@RestController
@RequestMapping("/serviceappts")
public class AppointmentController {

	@Autowired
	AppointmentRepository apptRep;
	@Autowired
	PersonRepository personRep;
	@Autowired
	ServiceRepository serviceRep;
	
	@GetMapping("/persons/{personId}/appointments")
	public Page<Appointment> getAppointmentsByPersonId(@PathVariable(value ="personId") Long personId, Pageable pageable){
		 Page<Appointment> appts = apptRep.findByPersonId(personId, pageable);
		 return appts;
	}
	
	
	@PostMapping("/services/{serviceId}/persons/{personId}/appointments")
	public Optional<Appointment> createAppointment( @PathVariable(value="serviceId") Long serviceId, @PathVariable(value="personId") Long personId, @Valid @RequestBody Appointment appt) {
		Optional<Appointment> result = null;
		
			result = serviceRep.findById(serviceId).map(service ->{
				appt.setService(service);
				Optional<Person> person = personRep.findById(personId);
				appt.setPerson(person.get());
				return apptRep.save(appt);
				});


		return result;
	}
	
	@DeleteMapping("/appointments/{appointmentId}")
	public Boolean deleteAppointment(@PathVariable(value="id") Long appointmentId) {
		try {
			apptRep.deleteById(appointmentId);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
	
	
	@PutMapping("/appointments/{appointmentId}")
	public Optional<Appointment> updateAppointment(@PathVariable(value="id") Long appointmentId) {
		return apptRep.findById(appointmentId).map(appt ->{
			appt.setDate(appt.getDate());
			appt.setTime(appt.getTime());
			appt.setModifiedAt(appt.getModifiedAt());
			appt.setEstado(appt.getEstado());
			return apptRep.save(appt);
		});
	}
	
}
