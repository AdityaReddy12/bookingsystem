package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Booking;
import com.example.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	public BookingRepository studRepo;
    
	public List<Booking> getAllStudents()
	{
		List<Booking> student = new ArrayList<>();
		studRepo.findAll().forEach(student::add);
		return student;
	}
	public Optional<Booking> getStudById(int id)
	{
		return studRepo.findById(id);
		
	}
	public void addStudent(Booking student) {
		studRepo.save(student);
		
	}

	public void updateStudent(int id, Booking student) {
		studRepo.save(student);
		
	}

	public void deleteStudent(int id) {
		studRepo.deleteById(id);
		
	}
}
