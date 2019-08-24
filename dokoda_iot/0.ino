int nomor = 0;
int state = 0;

void setup() {
  pinMode(D3, INPUT);
  pinMode(D5, OUTPUT);  
  Serial.begin(115200);
}

void loop(){
  state = digitalRead(D3);
  if(state == 1) {    
    digitalWrite(D5, HIGH);
    delay(1000);
    nomor++; 
    Serial.println(nomor);
    digitalWrite(D5, LOW);
  }
  else {
    digitalWrite(D5, LOW);
  }
 }