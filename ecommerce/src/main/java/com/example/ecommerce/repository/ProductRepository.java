package com.example.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.model.Product;

//Define the repository to interact with the database.
// Repository interface for Product
public interface ProductRepository extends JpaRepository<Product, Long> {
}
