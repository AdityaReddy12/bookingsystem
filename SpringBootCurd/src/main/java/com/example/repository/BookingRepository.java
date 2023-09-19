package com.example.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.bean.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer>{

}
