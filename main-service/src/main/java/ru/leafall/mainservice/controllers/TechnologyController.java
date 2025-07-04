package ru.leafall.mainservice.controllers;

import ru.leafall.mainservice.dto.technology.TechnologyCreateDto;
import ru.leafall.mainservice.dto.technology.TechnologyFullDto;
import ru.leafall.mainservice.dto.technology.TechnologyUpdateDto;
import ru.leafall.mainservice.service.TechnologyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/technologies")
@RequiredArgsConstructor
public class TechnologyController {

    private final TechnologyService service;

    @GetMapping
    public ResponseEntity<List<TechnologyFullDto>> findAll() {
        List<TechnologyFullDto> dtos = service.findAll();
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("{id}")
    public ResponseEntity<TechnologyFullDto> findById(@PathVariable Integer id) {
        TechnologyFullDto dto  = service.findById(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping()
    public ResponseEntity<TechnologyFullDto> create(@Valid @RequestBody TechnologyCreateDto dto) {
        TechnologyFullDto createdTechnology  = service.create(dto);
        return new ResponseEntity<>(createdTechnology, HttpStatus.CREATED);
    }

    @PutMapping()
    public ResponseEntity<TechnologyFullDto> update(@Valid @RequestBody TechnologyUpdateDto dto) {
        TechnologyFullDto updatedDto  = service.update(dto);
        return ResponseEntity.ok(updatedDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Integer> delete(@PathVariable Integer id) {
        Integer updatedDto  = service.delete(id);
        return ResponseEntity.ok(updatedDto);
    }

}
