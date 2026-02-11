package com.MiniProject.hotel.service;

import org.springframework.stereotype.Service;

@Service
public class TestService {

    private Dummy dummy;

    public TestService(Dummy dummy)
    {
        this.dummy=dummy;
    }

    public String Print()
    {
        return "Hello from test service "+dummy.hello();
    }
}
