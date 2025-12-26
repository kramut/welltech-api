# 🧪 Test Endpoints ClickBank

## Endpoint da Testare (in ordine)

### 1. Endpoint Root (dovrebbe sempre funzionare)
```
GET https://welltechbackend-production.up.railway.app/
```
**Risposta attesa:** JSON con lista di tutti gli endpoint disponibili

### 2. Endpoint Workflows Base
```
GET https://welltechbackend-production.up.railway.app/api/workflows/trends
```
**Risposta attesa:** Array di trend (anche se vuoto)

### 3. Endpoint ClickBank Base (NUOVO - semplice)
```
GET https://welltechbackend-production.up.railway.app/api/workflows/clickbank
```
**Risposta attesa:**
```json
{
  "message": "ClickBank API endpoints are available",
  "status": "ok",
  "endpoints": {
    "test": "/api/workflows/clickbank/test",
    "endpoints": "/api/workflows/clickbank/endpoints",
    "orders": "/api/workflows/clickbank/orders",
    "stats": "/api/workflows/clickbank/stats"
  }
}
```

**Se questo funziona** → Le route sono caricate correttamente!

### 4. Endpoint ClickBank Test
```
GET https://welltechbackend-production.up.railway.app/api/workflows/clickbank/test
```
**Risposta attesa (se API key configurata):**
```json
{
  "success": true,
  "message": "Connessione ClickBank API riuscita",
  "data": {...}
}
```

**Risposta attesa (se API key NON configurata):**
```json
{
  "error": "ClickBank API key non configurata",
  "message": "Aggiungi CLICKBANK_API_KEY nelle variabili d'ambiente"
}
```

**Risposta attesa (se controller non caricato):**
```json
{
  "error": "ClickBank controller not loaded",
  "message": "...",
  "hint": "Check server logs for details"
}
```

## 🔍 Debug Steps

1. **Testa endpoint root** → Se non funziona, il server non è attivo
2. **Testa `/api/workflows/trends`** → Se non funziona, le route workflows non sono caricate
3. **Testa `/api/workflows/clickbank`** → Se funziona, le route ClickBank sono caricate
4. **Testa `/api/workflows/clickbank/test`** → Se non funziona, c'è un problema con il controller

## 📝 Note

- L'endpoint `/api/workflows/clickbank` è stato aggiunto come test semplice
- Non richiede il controller ClickBank, quindi dovrebbe sempre funzionare
- Se questo endpoint funziona ma `/test` no, il problema è nel controller

