#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
WiFiClient client;
const char* ssid = "Grha Lt. 3E - R.  Sidang Besar";
const char* password = "senjadibataskota";

int state = 0;
int dano = 0;
String dastr = "12.1.1.123.1.12.123456";
String dastatus = "on";

void setup() {
  pinMode(D3, INPUT);
  pinMode(D5, OUTPUT);  
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi connected");
}

void loop(){
  state = digitalRead(D3);
  if(state == 1) {    
    digitalWrite(D5, HIGH);
    delay(1000);
    dano++; 
    Serial.println(dano);
    uploadData(dano, dastr, dastatus);
    delay(1000);
    digitalWrite(D5, LOW);
  }
  else {
    digitalWrite(D5, LOW);
  }
 }

 void uploadData(int dano, String dastr, String dastatus){
  if(WiFi.status()== WL_CONNECTED){
    Serial.println("Masuk");  
    HTTPClient http;
//    http.begin("http://platform.antares.id:8443/~/antares-cse/antares-id/dokoda/dokoda");
//    http.addHeader("X-M2M-Origin", "d9e77b1c1d3ab3dd:3851cc16aaf01fa8");
//    http.addHeader("Content-Type", "application/json; ty=4");
//    http.addHeader("Accept", "application/json");
    
    http.begin("http://platform.antares.id:8443/~/antares-cse/antares-id/dokoda/dokoda");
    http.addHeader("Content-Type", "application/json; ty=4");
    
    String body = "{\"dano\": " + String(dano) + ", \"dastr\": " + String(dastr) + ", \"dastatus\": " + String(dastatus) + "}";
    
    int httpCode = http.POST(body);
    //int httpCode = http.GET();
    String payload = http.getString(); 
    
    Serial.println(httpCode); 
    Serial.println(payload);
    Serial.println(body); 
    
    http.end();
  }else{
    Serial.println("Error in WiFi connection");   
  }
delay(3000);
}