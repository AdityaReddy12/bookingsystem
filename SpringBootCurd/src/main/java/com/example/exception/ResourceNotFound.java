package com.example.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends Exception {

	  /**
	   * Instantiates a new Resource not found exception.
	   *
	   * @param message the message
	   */
	  public ResourceNotFound(String message) {
	    super(message);
	  }

	

}
