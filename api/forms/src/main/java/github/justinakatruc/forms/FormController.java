package github.justinakatruc.forms;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/forms")
public class FormController {
    @Autowired
    private FormService formService;
    @GetMapping
    public ResponseEntity<List<Form>> getAllForms() {
        return new ResponseEntity<List<Form>>(formService.allForms(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Form>> getSingleForm(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Form>>(formService.singleForm(id), HttpStatus.OK);
    }
}