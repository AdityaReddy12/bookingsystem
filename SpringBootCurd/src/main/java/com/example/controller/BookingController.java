package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.Booking;
import com.example.bean.Subject;
import com.example.service.BookingService;
import com.example.service.SubjectService;
@RestController
@CrossOrigin(origins="*")
public class BookingController {
	@Autowired
	private BookingService studService;

	@RequestMapping("/students")
	public List<Booking> getAllStudents()
	{
		return studService.getAllStudents();
	}
	@RequestMapping("/students/{id}")
	public Optional<Booking> getStudById(@PathVariable int id)
	{
		return studService.getStudById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value="/students")
	public void addStudent(@RequestBody Booking student)
	{
		studService.addStudent(student);
	}
	
	
	@RequestMapping(method = RequestMethod.PUT, value="/students/{id}")
	public void updateStudent(@PathVariable int id, @RequestBody Booking student)
	{
		studService.updateStudent(id, student);
	}
	@RequestMapping(method = RequestMethod.DELETE, value="/students/{id}")
	public void DeleteStudent(@PathVariable int id)
	{
		studService.deleteStudent(id);
	}

}
