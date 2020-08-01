/* Copyright (C) Pramod Nair - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pramod Nair <pramodnairx@gmail.com>, April 2018
 */

/**
 * 
 */
package com.infosys.ea.govhack.controller.test;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.infosys.ea.govhack.model.BMI;


/**
 * @author prnair
 *
 */
@SpringBootTest
@AutoConfigureMockMvc
public class HelloGovHackControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@Test
	public void testGetBMIWithValidInputs() throws Exception {

		BMI expectedBmi = new BMI();
		expectedBmi.setHeight(171);
		expectedBmi.setWeight(68);
		expectedBmi.setBmi(Float.parseFloat("23.26"));
		ObjectMapper mapper = new ObjectMapper();
		String expectedBmiAsJson = mapper.writeValueAsString(expectedBmi);
		
		
		BMI bmi = new BMI();
		bmi.setHeight(171);
		bmi.setWeight(68);
		
		String bmiAsJson = mapper.writeValueAsString(bmi);
		
		mvc.perform(MockMvcRequestBuilders.post("/calculateBMI")
					.contentType(MediaType.APPLICATION_JSON)
					.content(bmiAsJson)
					.accept(MediaType.ALL))
					.andExpect(MockMvcResultMatchers.status().isOk())
					//.andExpect(MockMvcResultMatchers.content().string("23.26"));
					.andExpect(MockMvcResultMatchers.content().json(expectedBmiAsJson));
	}
}
