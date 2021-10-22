using UnityEngine;
using System;

public class CSBrownianMovement : MonoBehaviour
{

    UnityEngine.Rigidbody _rb;
    UnityEngine.UI.Slider _hb;
    void Start()
    {
        this._rb = GetComponent<UnityEngine.Rigidbody>();
        this._hb = transform.Find("Canvas").Find("Slider").gameObject.GetComponent<UnityEngine.UI.Slider>();
    }

    void Update()
    {
        float start = Time.realtimeSinceStartup;
        int baseForce = 200;
        this._rb.velocity = this._rb.velocity * 0.95f;
        var vector = new UnityEngine.Vector3(
            UnityEngine.Random.Range(-0.5f, 0.5f) * baseForce,
            0,
            UnityEngine.Random.Range(-0.5f, 0.5f) * baseForce
        );
        this._rb.AddForce(vector);
        this._hb.value = this._rb.velocity.magnitude / 20;
        GameManager.Instance.currentUpdateTime += (Time.realtimeSinceStartup - start);
    }
}