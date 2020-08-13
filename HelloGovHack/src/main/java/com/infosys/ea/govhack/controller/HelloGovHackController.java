/* Copyright (C) Pramod Nair - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pramod Nair <pramodnairx@gmail.com>, April 2018
 */

/**
 * 
 */
package com.infosys.ea.govhack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.ea.govhack.model.BMI;

/**
 * @author prnair
 *
 */
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloGovHackController {

		@PostMapping("/calculateBMI")
		public BMI getBMI(@RequestBody BMI bmi) {
			if((bmi.getHeight() != 0 && bmi.getWeight() != 0)) { 
				float ht = bmi.getHeight();
				float wt = bmi.getWeight();
				bmi.setBmi(Math.round((wt / ((ht/100) * (ht/100)))*100.0f)/100.0f);
				System.out.println("Set BMI value as " + bmi.getBmi());
			}
			return bmi;
		}

		@GetMapping("/getLGACoordinates")
		public String getLGACoordinates() {
			return vicLGACoordinates;
		}
		
		
private String vicLGACoordinates =""; 

}
