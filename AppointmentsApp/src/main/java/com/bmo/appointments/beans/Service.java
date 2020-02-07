package com.bmo.appointments.beans;

import java.sql.Date;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="Service")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)

public class Service {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	 @ManyToOne(fetch = FetchType.LAZY, optional = false)
	 @JoinColumn(name = "clientId", nullable = false)
	 @OnDelete(action = OnDeleteAction.CASCADE)
	 @JsonIgnore
	private Client client;
	
	
	@NotBlank
	private String serviceName;
	
	@Column(nullable = false, updatable = false)
    //@Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;
	
	
	@Column(nullable = true, updatable = true)
   // @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date modifiedAt;
	
	@NotBlank
	private Short estado;

	public Date getCreatedAt() {
		return createdAt;
	}
	public Short getEstado() {
		return estado;
	}
	
		
	public Long getId() {
		return id;
	}
	
	public Date getModifiedAt() {
		return modifiedAt;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public void setEstado(Short estado) {
		this.estado = estado;
	}
	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	
	public Client getClient() {
		return client;
	}
	
	
}
