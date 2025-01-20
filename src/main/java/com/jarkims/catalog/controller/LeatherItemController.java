package com.jarkims.catalog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LeatherItemController {

    @GetMapping("/home")
    public String getLeatherItems(Model model) {
        // Serve the catalog page
        return "catalog";
    }

    @GetMapping("/about")
    public String getAboutPage() {
        // Serve the about page
        return "about";
    }

    @GetMapping("/services")
    public String getServicesPage() {
        // Serve the services page
        return "services";
    }

    @GetMapping("/contact")
    public String getContactPage() {
        // Serve the contact page
        return "contact";
    }
}
