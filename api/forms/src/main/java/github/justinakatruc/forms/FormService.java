package github.justinakatruc.forms;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormService {
    @Autowired
    private FormRepository formRepository;
    public List<Form> allForms() {
        return formRepository.findAll();
    }

    public Optional<Form> singleForm(ObjectId id) {
        return formRepository.findById(id);
    }
}
