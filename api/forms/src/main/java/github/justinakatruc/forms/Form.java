package github.justinakatruc.forms;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "forms")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Form {
    @Id
    private ObjectId id;
    private String name;
    private String email;
    private String message;
}
