package com.bmo.appoitnments.beans;

import java.util.List;

public class Client {
	
	private String clientName;
	private List<Service> services;
	
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public List<Service> getServices() {
		return services;
	}
	public void setServices(List<Service> services) {
		this.services = services;
	}

}
