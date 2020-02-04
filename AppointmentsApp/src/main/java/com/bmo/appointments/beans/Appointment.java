package com.bmo.appointments.beans;

import java.time.LocalDate;
import java.time.LocalTime;

public class Appointment {
	
	private Service service;
	private LocalTime time;
	private LocalDate date;
	private Person person;
	
	
	public LocalDate getDate() {
		return date;
	}
	public Person getPerson() {
		return person;
	}
	public Service getService() {
		return service;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	public void setService(Service service) {
		this.service = service;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	
}
