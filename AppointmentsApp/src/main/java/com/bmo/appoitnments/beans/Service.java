package com.bmo.appoitnments.beans;

import java.time.LocalTime;
import java.util.HashMap;

public class Service {
	
	private String serviceName;
	private HashMap<String, HashMap<String, LocalTime>> hours;
	
	
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public HashMap<String, HashMap<String, LocalTime>> getHours() {
		return hours;
	}
	public void setHours(HashMap<String, HashMap<String, LocalTime>> hours) {
		this.hours = hours;
	}
	

}
